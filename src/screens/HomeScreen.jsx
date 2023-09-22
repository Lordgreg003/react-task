import React from 'react';
import {
  Hero,
  Advantage,
  Happily,
  Works,
  Testimony,
  Videos,
  Ready,
} from '../components/home/index';
import { Foot, Nav } from '../components/layout';

const HomeScreen = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Advantage />
      <Happily />
      <Works />
      <Testimony />
      <Videos />
      <Ready />
      <Foot />
    </div>
  );
};

export default HomeScreen;
