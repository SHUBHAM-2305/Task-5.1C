import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import PostTypeSelector from './PostTypeSelector';
import FormFieldGroup from './FormFieldGroup';
import TagInput from './TagInput';
import SubmitButton from './SubmitButton';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

function App() {
  const [postType, setPostType] = useState('question');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [abstract, setAbstract] = useState('');

  const handlePostTypeChange = (e, { value }) => {
    setPostType(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Tags:', tags);
    console.log('Post Type:', postType);
  };

  return (
    <div className="App">
      <h3>Create New Post</h3>

      <Form onSubmit={handleSubmit}>
        <PostTypeSelector postType={postType} onPostTypeChange={handlePostTypeChange} />

        {postType === 'question' ? (
          <>
            <FormFieldGroup
              label={<span style={{fontWeight: 'bold', fontSize: 15, color: '#333', marginBottom:5 }}>Title</span>}
              placeholder="Start your question with how, what, why, etc."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <FormFieldGroup
              label={<span style={{fontWeight: 'bold', fontSize: 15, color: '#333', marginBottom:5 }}>Description</span>}
              placeholder="Describe your problem"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              textarea
            />
          </>
        ) : (
          <>
            <FormFieldGroup
              label={<span style={{fontWeight: 'bold', fontSize: 15, color: '#333', marginBottom:5 }}>Title</span>}
              placeholder="Enter a descriptive title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <FormFieldGroup
              label={<span style={{fontWeight: 'bold', fontSize: 15, color: '#333', marginBottom:5 }}>Abstract</span>}
              placeholder="Enter abstract"
              value={abstract}
              onChange={(e) => setAbstract(e.target.value)}
              textarea
            />
            <FormFieldGroup
              label={<span style={{fontWeight: 'bold', fontSize: 15, color: '#333', marginBottom:5 }}>Article text</span>}
              placeholder="Enter the article text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              textarea
            />
          </>
        )}

        <TagInput tags={tags} onChange={(e) => setTags(e.target.value)} />

        <SubmitButton />
      </Form>
    </div>
  );
}

export default App;
