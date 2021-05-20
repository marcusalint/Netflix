import React from 'react';

export default function OptForm({children, ...restProps}) {
  return (
    <Container {...restProps}>{children}</Container>
  )
}

OptForm.input =function OptFormInput({...restProps}) {
  return <Input {...restProps} />;
}

OptForm.Button =function OptFormButton({children, ...restProps}) {
  return ( 
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.pong" alt="Try Now" />
    </Button>
  )
}

OptForm.Text =function OptFormText({...restProps}) {
  return <Text {...restProps}>{children}</Text>
}