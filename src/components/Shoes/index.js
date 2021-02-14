import React from 'react';

import { Image } from 'react-native';

import { Container, Text, EffectOpacity } from './styles';

const Shoes = ({ img, cost, onClick, children }) => {
  const filterDesc = (desc) => {
    if (desc.length < 27) {
      return desc;
    }

    return `${desc.substring(0, 22)}...`
  }

  return (
    <Container
      onPress={onClick}
    >
      <Image
        source={img}
        style={{
          width: 175,
          height: 175
        }}
      />
      <Text>
        {filterDesc(children)}
      </Text>
      <EffectOpacity>
        <Text>
          {cost}
        </Text>
      </EffectOpacity>
    </Container>
  );
};

export default Shoes;
