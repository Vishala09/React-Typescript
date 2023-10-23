import React from 'react'

//////////////////////////////// Restricted Types

type StatusProps = {
    status : 'Loading' | 'Success' | 'Error';
    children: React.ReactNode
}
const StatusComp = (props:StatusProps) => {
    return(
        <div>Status : {props.status}</div>
    )
}
//////////////////////////////// Generic Types

type ObjectListProps<T> = {
  data: T[]
}
const ObjectListComp = <T extends {id:number}>(props:ObjectListProps<T>) => {
  
  return(
    <div>
       <div>Id is mandatory.</div>
       {JSON.stringify(props.data)}
    </div>
  )
}

//////////////////////////////// Never and Type Extension
type language = {
  typed : boolean;
  compiled : boolean;
  interpreted : boolean;
}
type backend = {
  hosting: string[];
  databases: string[];

  style: never;
  browsers: never;
}

type frontend = {
  style: string[];
  browsers: string[];

  hosting: never;
  databases: never;
}

type frontendLanguage = language | frontend;

let javascript : frontendLanguage = {typed:false,compiled:true,interpreted:true,style:[],browsers:[]}

//////////////////////////////// Exclude
type snb = string | number | boolean;

type user = {
    id : Exclude<snb,boolean>;
}

const user1 : user = {id:1}
const user2 : user = {id:'a'}

//////////////////////////////// Use props of another comp
type PrinterProps = {message:string}
const Printer = (props:PrinterProps) => {return(<div></div>)}
const logger = (props:React.ComponentProps<typeof Printer>) => {return(<div></div>)}

////////////////////////////////
const AdvancedDataTypes = () => {
  const objectList = [
    {id:1,name:'Jack',age:10},
    {id:2,name:'Jim',age:12},
    {id:3,name:'Han',age:15}
  ]
  return (
    <div>
            <StatusComp status='Success' > 
                <div> Render some more status using children attr </div>
            </StatusComp>
            <ObjectListComp data={objectList} />
    </div>
  )
}

export default AdvancedDataTypes
