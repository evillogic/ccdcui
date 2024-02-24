'use client';

import Image from 'next/image';

export default function ScoreboardPage() {
  return (
    <div style={{ 
        minHeight: '100vh', 
        overflow: 'auto', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingBottom: '50px' // Added padding at the bottom for extra space
    }}>
      <Image src={"https://arena.wrccdc.org/scores/"} alt="Scoreboard" style={{ 
          maxWidth: '100%', 
          height: 'auto', 
          display: 'block', // Ensure the image doesn't have extra space below it
      }} />
    </div>
  );
}
