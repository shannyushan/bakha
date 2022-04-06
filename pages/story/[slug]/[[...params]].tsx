import React, { useEffect } from 'react'
import {useRouter} from 'next/router'
import next, { NextPage } from 'next';
import useStory, { StoryProvider } from '../../../context/storyContext';


const StoryPage:NextPage = () => {
    const router = useRouter();
    const {params, slug} = router.query;
    console.log(params, slug);
    
    const {storyid,chapterid,nextChapter,prevChapter,firstChapter,lastChapter} = useStory();

    useEffect(()=>{
        //get the id of story and chapter to load
        
    },[params, slug]);

  return (
    <StoryProvider>

    </StoryProvider>
  )
}

export default StoryPage