import React, { useEffect } from 'react';

const TikTokEmbed = () => {
  useEffect(() => {
    // Load the TikTok embed script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.tiktok.com/embed.js';
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <blockquote
        className='tiktok-embed'
        cite='https://www.tiktok.com/@ldnsportsocial'
        data-unique-id='ldnsportsocial'
        data-embed-type='creator'
        style={{ maxWidth: '780px', minWidth: '288px' }}
      >
        <section>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.tiktok.com/@ldnsportsocial?refer=creator_embed'
          >
            @ldnsportsocial
          </a>
        </section>
      </blockquote>
    </div>
  );
};

export default TikTokEmbed;
