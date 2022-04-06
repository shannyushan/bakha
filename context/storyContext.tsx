import {ReactNode, createContext, useState, useContext, useEffect} from 'react'
import Cookies from "jscookie";

type Props = {
    children: ReactNode;
};

type storyContextType={
    story: Object;
    storyid: string,
    currentchapter: Number;
    chapter:Object;
    chapterid:string
    isMultiChapter: Boolean;
    changeChapter: (chapter:string) => Promise<void>;
    nextChapter: () => Promise<void>;
    prevChapter: () => Promise<void>;
    firstChapter: () => Promise<void>;
    lastChapter: () => Promise<void>;
}



//Defining the structre and initial value of the story context
const StoryContextStructure: storyContextType ={
    story : {},
    storyid: null,
    currentchapter: null,
    chapter:{},
    chapterid:null,
    isMultiChapter: false,
    changeChapter: async (chapter:string) => {},
    nextChapter: async() => {},
    prevChapter: async() => {},
    firstChapter: async() => {},
    lastChapter: async() => {},
}

//using context structre to create Context using CreateContext
const AuthContext = createContext<storyContextType>(StoryContextStructure);


//
export default function useStory(){ return useContext(AuthContext)};



///Context provider to use in the storydetail page
export function StoryProvider({ children }: Props) {
    const[story, setStory] = useState<Object>(null);
    const[chapter, setChapter] = useState<Object>(null);

    const [isMultiChapter, setIsMultiChapter] = useState<Boolean>(false);
    const [currentchapter, setCurrentchapter] = useState<Number>(null);
    const [storyid, setStoryid] = useState<string>(null);
    const [chapterid, setChapterid] = useState<string>(null);

    useEffect(()=>{
            /// fetch the correct story and chapter
    }, [storyid, chapterid])

    const changeChapter =async()=>{

    }
    const nextChapter =async()=>{
        
    }
    const prevChapter =async()=>{
        
    }
    const firstChapter =async()=>{
        
    }
    const lastChapter =async()=>{
        
    }


    const value= {
        story,
        storyid,
        currentchapter,
        chapter,
        chapterid,
        isMultiChapter,
        changeChapter,
        nextChapter,
        prevChapter,
        firstChapter,
        lastChapter
    }
    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}
