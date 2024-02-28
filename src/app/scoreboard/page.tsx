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
      <Image unoptimized src={"https://arena.wrccdc.org/scores/"} alt="Scoreboard" fill style={{}} />
    </div>
  );
}
