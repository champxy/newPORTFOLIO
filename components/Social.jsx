import Link from 'next/link';
import {
    FaFacebook,
    FaInstagram,
    FaGithub,
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const socials = [
    {
        name: 'Facebook',
        icon: <FaFacebook />, // Invoke as a component
        link: 'https://www.facebook.com/',
        color : 'text-blue-600'
    },
    {
        name: 'FaXTwitter',
        icon: <FaXTwitter />, // Invoke as a component
        link: 'https://twitter.com/',
        color : 'text-white'
    },
    {
        name: 'Instagram',
        icon: <FaInstagram />, // Invoke as a component
        link: 'https://www.instagram.com/',
        color : 'text-pink-500'
    },
    {
        name: 'Github',
        icon: <FaGithub />, // Invoke as a component
        link: '',
        color : 'text-gray-300'
    },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link key={index} href={item.link} className={`${iconStyles} ${item.color}`}>   
                    {item.icon}
                </Link>
            ))}
        </div>
    );
};

export default Social;
