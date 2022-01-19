import React from 'react'
import { Article } from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './imports'
import './blog.css';

const Blog = () => {
    return (
        <div className='nekoh__blog section__padding' id='blog'>
            <div className='nekoh__blog-heading'>
                <h1 className='gradient__text'>The Latest</h1>
            </div>
            <div className='nekoh__blog-container'>
                <div className='nekoh__blog-container_groupA'>
                    <Article imgUrl={blog01} date="19.01.2022" title="A hard rain is coming for UK’s crypto boom"/>
                </div>
                <div className='nekoh__blog-container_groupB'>
                    <Article imgUrl={blog02} date="18.01.2022" title="A hard rain is coming for UK’s crypto boom"/>
                    <Article imgUrl={blog03} date="17.01.2022" title="A hard rain is coming for UK’s crypto boom"/>
                    <Article imgUrl={blog04} date="16.01.2022" title="A hard rain is coming for UK’s crypto boom"/>
                    <Article imgUrl={blog05} date="15.01.2022" title="A hard rain is coming for UK’s crypto boom"/>
                </div>
            </div>
        </div>
    )
}

export default Blog
