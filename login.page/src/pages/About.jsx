import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const src = "https://content.guardianapis.com/search?page=2&q=debate&api-key=test";
    
export const About = () => {

    const [articles, setArticles] = useState([]);
  
    useEffect (()=>{
      axios
      .get(src)
      .then(data => {
        setArticles(data.data.response.results);
      })
    }, []);
    
    return (
        <Wrapper>
            {articles.map(article => {
                return (
                    <Text><Link href = {article.webUrl}>{article.webTitle}</Link></Text>
                )
            })}
        </Wrapper>
    );
}

const Wrapper = styled.div`
`;
const Text = styled.p`
    font-size: 32px;
`;
const Link = styled.a`
    text-decoration: none;
    color: #464655;
`;
