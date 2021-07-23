import React,{useState, useEffect, useRef} from 'react';

import searchIcon from '../../images/search-icon.svg';

import { Wrapper, Content } from './SearchBar.styles.js';

const SearchBar = ({ setSearchTerm })=>{
    const [search, setSearch] = useState('');
    const initial =useRef(true);

    useEffect(()=>{

        if(initial.current){
            initial.current =false;
            return
        }
        const timer =setTimeout(()=>{
            setSearchTerm(search);
        },500)   

        return ()=> clearTimeout(timer)
    },[setSearchTerm,search])
    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt ='search-icon'/>
                <input type='text'
                 placeholder='Search Movies'
                 onChange={e =>setSearch(e.currentTarget.value)}
                 value={search}      
                 
                 />   
            
            </Content>
        </Wrapper>
    )
}

export default SearchBar; 