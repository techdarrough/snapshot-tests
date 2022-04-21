import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'
import CardMaker from './CardMaker'

test('Renders a snapshot', () =>{
  const tree = renderer.create(<CardMaker/>)
  expect(tree).toMatchSnapshot()
})