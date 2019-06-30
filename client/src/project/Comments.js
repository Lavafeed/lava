import { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Icon from '../common/Icon';
import Comment from './Comment';

const Comments = () => {
  const [currentTab, setCurrentTab] = useState('comments');

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

  const renderInformation = ({ ...props }) => <div>hello</div>;

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
