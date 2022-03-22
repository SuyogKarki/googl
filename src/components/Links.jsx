import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔎 All', value: 'search' },
  { url: '/news', text: '📰 News', value: 'news' },
  { url: '/images', text: '📸 Images', value: 'images' },
  { url: '/videos', text: '📺 Videos', value: 'videos' },
];

const Links = () => {
  const [active, setActive] = useState('search');
  return (
    <div className='flex sm:justify-around justify-between items-center mt-4'>
      {links.map(({ url, text, value }, index) => (
        <NavLink to={url} className={`m-2 mb-0 ${active === value ? 'text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2' : ''}`} key={index} onClick={() => setActive(value)}>
          {text}
        </NavLink>
      ))}
    </div>
  );
};
export default Links;
