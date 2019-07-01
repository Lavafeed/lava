import { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Icon from '../common/Icon';
import Comment from './Comment';

const Comments = () => {
  const [currentTab, setCurrentTab] = useState('information');

  const renderComments = ({ ...props }) => (
    <CommentsSection>
      <SortWrapper>
        <Field placeholder="Write a comment..." />
        <SortBtn>
          <Icon name="sort" />
        </SortBtn>
      </SortWrapper>
      <Comment />
      <Comment />
    </CommentsSection>
  );

  const renderInformation = ({ ...props }) => (
    <InfoSection>
      <Title>Description</Title>
      <Description>
        The website of the company, which provides uninterrupted power supply
        throughout Europe. Particular attention in design is paid to the
        technology and uniqueness inherent in the products presented.
      </Description>
      <PostDate>Published: 20 апреля 2017 г.</PostDate>
      <Title>Tags</Title>
      <Tags>
        <Tag>ui design</Tag>
        <Tag>ikea</Tag>
        <Tag>Concept</Tag>
        <Tag>redesign</Tag>
        <Tag>Interaction</Tag>
      </Tags>
    </InfoSection>
  );

  return (
    <Wrapper>
      <Tabs>
        <Tab
          active={currentTab === 'comments'}
          onClick={() => setCurrentTab('comments')}
        >
          Comments
        </Tab>
        <Tab
          active={currentTab === 'information'}
          onClick={() => setCurrentTab('information')}
        >
          Information
        </Tab>
      </Tabs>
      {currentTab === 'comments' ? renderComments() : renderInformation()}
    </Wrapper>
  );
};

export default connect(null)(Comments);

const Wrapper = styled.div`
  padding: 12px 0 0;
`;

const Tabs = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const Tab = styled.div`
  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  color: ${props => props.theme.colors.inactive.value};
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 1px solid ${props => props.theme.colors.greyBorders.value};

  ${props =>
    props.active &&
    `
    font-weight: bold;
    color: ${props.theme.colors.black.value}; 
    border-bottom: 2px solid ${props.theme.colors.black.value};
    `}}
`;

const CommentsSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`;

const Field = styled.input.attrs(({ placeholder }) => ({
  placeholder,
  type: 'text'
}))`
  width: 100%;
  padding-left: 14px;
  max-width: 280px;
  height: 28px;
  border-radius: 35px;
  border: solid 1px ${props => props.theme.colors.greyBorders.value};
  background-color: ${props => props.theme.colors.white.value};
  outline: 0;

  ::placeholder {
    /* Firefox, Chrome, Opera */
    color: ${props => props.theme.colors.black.value};
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${props => props.theme.colors.black.value};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${props => props.theme.colors.black.value};
  }
`;

const SortBtn = styled.button``;

const InfoSection = styled.div``;

const Title = styled.h4`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.17;
  color: ${props => props.theme.colors.black.value};
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: ${props => props.theme.colors.black.value};
  margin-bottom: 16px;
`;

const PostDate = styled.h5`
  font-size: 12px;
  font-weight: normal;
  line-height: 1.5;
  color: ${props => props.theme.colors.inactive.value};
  margin-bottom: 48px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.lightGrey.value};
  font-size: 12px;
  font-weight: normal;
  line-height: 1.17;
  text-align: center;
  color: ${props => props.theme.colors.inactive.value};
  padding: 0 11px;
  margin-right: 9px;
  margin-bottom: 14px;
`;
