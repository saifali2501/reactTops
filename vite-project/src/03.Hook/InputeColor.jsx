import React, { useState } from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'

export default function InputeColor() {
    let [color, setColor] = useState('red');

    const handleChange = (e) => {
      setColor(e.target.value);
    };
  
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="colorInput">Enter a color name:</Label>
            <Input
              id="colorInput"
              name="color"
            //   placeholder="e.g., red, blue, green"
              type="text"
              value={color}
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
        <div style={{ backgroundColor: color, height: '100px', width: '100px', marginTop: '20px' }}>
        </div>
      </div>
    );
}
