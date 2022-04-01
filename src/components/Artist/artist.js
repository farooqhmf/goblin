import React from 'react'
import Image from 'next/image'

const artist = () => {
  return (
    <div className='artist-main-div' id='artist'> 
        <div className='artist-flex-btw'>
          <div className='artist-text'>
          <h1 className='h1-text'>THE <span className='text-green'>ARTIST</span></h1>
          <p className='p-text'>
            Talent, determination, and the pursuit of excellence. Always pushing the boundaries of his skill and ambition, Allan Macedo is the 3D artist and digital sculptor behind Sneaky Goblins. <br />
            With a passion for superhero art, NFTs and the future of IP, the Goblins have the best artist in the game. <br />
            Previous work include: Marvel, DC Comics, Warner Bros, and more.
          </p>
        <button className='btn-discord'> <span className='btn-icon'><Image src="/images/btn-icon.svg"  width={24} height={18} alt='btn-icon' /></span>Join us on Discord</button>
        </div>
        <div className='artist-image'>
            <span className='stick-image'> <Image  src="/stick.png" width={400} height={800}  alt='stick' /></span>
            <span className='avatar-set'>  <Image  src="/avatar3.png" width={550} height={380} alt='avatar' /></span>
        </div>
        </div>
    </div>
  )
}

export default artist