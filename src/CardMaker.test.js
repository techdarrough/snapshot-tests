import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'


test('Renders a snapshot', () =>{
  const tree = renderer.create(<App/>)
  expect(tree).toMatchSnapshot()
})