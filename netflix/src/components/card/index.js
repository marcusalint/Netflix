import React, {useState, createContext} from 'react';

import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Image,
  Feature,
  FeatureTitle,
  Feature.Text,
  FeatureClose,
  Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image
} from './styles/card'

export const FeatureContext = createContext();

export default function Card({children, ...restProps}) {
  const [showFeature, setShowFeature] = useState(false);
  const [ItemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.provider valie={{showFeature, setShowFeature, itemFeature, setItemFeature}}>
      <Container {...restProps}>{children}</Container>
    </FeatureContext.provider>
  )
}

Card.Group = function CardGroup({children, ...restProps}) {
  return <Group {...restProps}>{children}</Group>
}

Card.Title = function CardTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

Card.SubTitle = function CardSubTitle({children, ...restProps}) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}

Card.Text = function CardText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}

Card.Entities = function CardEntities({children, ...restProps}) {
  return <Entities {...restProps}>{children}</Entities>
}

Card.Meta = function CardMeta({children, ...restProps}) {
  return <Meta {...restProps}>{children}</Meta>
}

Card.Item = function CardItem({children, ...restProps}) {
  const {setShowFeature, setItemFeature} = useContext(FeatureContext)

  return <Item 
  onClick={() => {
    setItemFeature(item)
    setShowFeature(true)
  }}
  {...restProps}>{children}</Item>
}

Card.Item = function CardItem({ ...restProps}) {
  return <Image {...restProps}/>
}