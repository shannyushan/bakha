import { Flex, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

// Next js is SSR so no window or document object is found//
const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};
 
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "code-blocks",
  "image",
  "video",
];

const CreateStory: NextPage = () => {
  const [storyData, setStoryData] = useState<string>("");
  return (
    <Flex className="pages" maxW={1500} margin={"0 auto"}>
      <Flex maxW={1000} m={"0 auto"} minW={450} width="60vw">
        <form>
          <FormControl>
            <FormLabel>Story Title</FormLabel>
            <Input size={"xl"} fontSize={"1.6em"} fontWeight={"bold"}/>
          </FormControl>
          <hr/>
          <VStack>
            <FormControl>
              <Input size="md" placeholder="Chapter title"/>
            </FormControl>
          <QuillNoSSRWrapper
            style={{"width":"100%"}}
            modules={modules}
            formats={formats}
            theme="snow"
            value={storyData}
            onChange={setStoryData}
            placeholder="Carve your story!"
            />
            </VStack>
            </form>
   
      </Flex>
    </Flex>
  );
};

export default CreateStory;
