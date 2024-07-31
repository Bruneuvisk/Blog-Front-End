/* eslint-disable react-hooks/exhaustive-deps */
import * as Styled from './styles';
import { PostStrapi } from '../../shared-types/post-strapi';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { BaseTemplate } from '../Base';
import { useEffect, useState } from 'react';
import { loadPosts, LoadPostsVariables } from '../../api/load-posts';
import { PostGrid } from '@/components/PostGrid';
import { BlogThemeContextValues } from '@/contexts/BlogThemeContext';
import { Comments } from '../../components/Comments';



export type PostsTemplateProps = {
  settings: SettingsStrapi;
  post: PostStrapi;
  variables?: LoadPostsVariables;
};

export const PostsTemplate = ({
    settings,
    post = [],
    variables,
  }: PostsTemplateProps) => {
    const [statePosts, setStatePosts] = useState(posts);
    const [stateVariables, setStateVariables] = useState(variables);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [noMorePosts, setNoMorePosts] = useState(false);

    useEffect(() => {
        setStatePosts(post);
        setNoMorePosts(false);
        setButtonDisabled(false);
        setStateVariables(variables);
    }, [post, variables]);
  
    const handleSetTheme: BlogThemeContextValues['setTheme'] = useCallback(
        (mode = 'default') => {
          if (mode === 'default') {
            setBlogTheme(theme);
            localStorage.setItem('theme', JSON.stringify(theme));
          } else {
            const newTheme = {
              ...theme,
              name: 'inverted',
              colors: {
                primary: '#FFFFFF',
                darkText: '#F9f9f9',
                secondary: '#dc143c',
                white: '#000000',
                mediumGray: '#f9f9f9',
                darkerGray: '#CCCCCC',
              },
            };
            setBlogTheme(newTheme);
            localStorage.setItem('theme', JSON.stringify(newTheme));
          }
        },
        [],
    );
  return (
    <BaseTemplate settings={settings}>
        <PostGrid posts={statePosts} />



        {statePosts && statePosts.length ? (
            <Styled.ButtonContainer>
            <Styled.Button
                onClick={handleSetTheme}
                disabled={buttonDisabled}
            >
                {noMorePosts ? 'Sem mais posts' : 'Carregar mais'}
            </Styled.Button>
            </Styled.ButtonContainer>
        ) : null}

        <Comments
            title={post.title}
            slug={post.slug}
            id={post.id}
            allowComments={post.allowComments}
        />
    </BaseTemplate>
  );
};