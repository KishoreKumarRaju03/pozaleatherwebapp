import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Text } from '@react-three/drei';

// Bag Model Component
function BagModel({ color, text, textColor, textPosition, modelUrl }) {
  const { nodes } = useGLTF(modelUrl);
  
  return (
    <>
      <mesh geometry={nodes.bag.geometry}>
        <meshStandardMaterial color={color} />
      </mesh>
      
      {text && (
        <Text
          position={getTextPosition(textPosition)}
          color={textColor}
          fontSize={0.2}
          anchorX="center"
          anchorY="middle"
        >
          {text}
        </Text>
      )}
    </>
  );
}

function getTextPosition(position) {
  // Adjust these values based on your model
  const positions = {
    front: [0, 0, 0.5],
    back: [0, 0, -0.5],
    side: [0.5, 0, 0]
  };
  return positions[position] || positions.front;
}

import { useGLTF } from '@react-three/drei';

// Preload models when component mounts
useEffect(() => {
  models.forEach(model => {
    try {
      useGLTF.preload(model.url);
    } catch (error) {
      console.error(`Failed to preload ${model.url}:`, error);
    }
  });
}, []);

const LeatherBagCustomizer = () => {
  // Your existing state
  const [selectedModel, setSelectedModel] = useState('model1');
  const [selectedColor, setSelectedColor] = useState('#8B4513');
  const [text, setText] = useState('');
  const [textColor, setTextColor] = useState('#000000');
  const [textPosition, setTextPosition] = useState('front');
  // ... other state ...

  // Model configurations
  const models = [
    { 
      id: 'model1', 
      name: 'Classic Tote', 
      url: '/models/tote.glb' // Path to your GLB file
    },
   { 
         id: 'model2', 
         name: 'Messenger Bag', 
         image: BagModel2,
         url: '/models/messenger.glb'
       },
       { 
         id: 'model3', 
         name: 'Backpack', 
         image: BagModel3,
         url: '/models/backpack.glb'
       }
  ];

  const renderBag = () => {
    const selectedBag = models.find(model => model.id === selectedModel);
    
    return (
      <div className="bag-preview">
        <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          
          <BagModel 
            color={selectedColor}
            text={text}
            textColor={textColor}
            textPosition={textPosition}
            modelUrl={selectedBag.url}
          />
          
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>
    );
  };

  // ... rest of your component code ...
};

export default LeatherBagCustomizer;