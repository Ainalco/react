import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ReactBoostrap() {
  return (
    <Card className='w-25 p-1'>
      <Card.Body>
      <Card.Title>Title</Card.Title>
        <p>Test lorumn Test Test lorumn Test Test lorumn Test</p>
        <Button>Read More</Button>
      </Card.Body>
    </Card>
  )
}
