import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { Container, Header, TextContainer, Text, Line, Grade } from './styles'
import { ScrollView } from 'react-native-gesture-handler'

import Shoes from '../../components/Shoes'

const Home = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <Header>
        <Image
          source={require('../../assets/banner.png')}
          style={{
            width: '100%'
          }}
        />

        <TextContainer>
          <Text>TÊNIS</Text>
          <Text style={{ color: '#CECECF' }}>*</Text>
          <Text style={{ color: '#CECECF' }}>MASCULINO</Text>

          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 0,
              alignSelf: 'center'
            }}
          >
            <MaterialIcons
              name="filter-list"
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </TextContainer>
      </Header>

      <Line />

      <ScrollView>
        <Text>LANÇAMENTOS</Text>

        <Grade>
          <Shoes
            img={require('../../assets/1.png')}
            cost="R$140,90"
            onClick={() => navigation.navigate('Detail')}
          >
            Nike Air Max 90
          </Shoes>
          <Shoes
            img={require('../../assets/2.png')}
            cost="R$280,90"
            onClick={() => navigation.navigate('Detail')}
          >
            Nike Downshifter 10
          </Shoes>
          <Shoes
            img={require('../../assets/3.png')}
            cost="R$560,90"
            onClick={() => alert('Clicou em mim')}
          >
            Nike Squidward Tentacles
          </Shoes>
          <Shoes
            img={require('../../assets/4.png')}
            cost="R$220,90"
            onClick={() => alert('Clicou em mim')}
          >
            Nike Epic React Flyknit 2
          </Shoes>
          <Shoes
            img={require('../../assets/5.png')}
            cost="R$120,90"
            onClick={() => alert('Clicou em mim')}
          >
            Nike Joyride Run Flyknit
          </Shoes>
          <Shoes
            img={require('../../assets/6.png')}
            cost="R$920,90"
            onClick={() => alert('Clicou em mim')}
          >
            Nike Air Max do Juninho Programador
          </Shoes>
        </Grade>
      </ScrollView>
    </Container>
  )
}

export default Home;