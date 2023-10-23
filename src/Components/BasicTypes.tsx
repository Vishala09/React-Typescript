import React from 'react'
import { renderToString } from 'react-dom/server'

function BasicTypes() {

       let name: string;
       let age: number;
       let isLoggedIn: boolean;
       let hobbies: string[]; //array type
       let random: any; //any type
       let role: [number, string] //tuple
       let id: string | number; //union
       type stringOrNumber = string | number; //type aliases
       let dataUnknown: unknown;

       let printerFun: (name: string, age: number) => void; //returns undefined
       let loggerFun: (name: string, age: number) => never; //does not return anything

       printerFun = (name, number) => {
              console.log(name, number)
       }

       type Person = {
              id: stringOrNumber;
              name: string;
              age?: number;
              isLoggedIn: boolean
       }
       let person1: Person;
       let persons: Person[] = [];

       person1 = { name: 'XXX', id: 1, isLoggedIn: true }
       persons.push(person1)

       type Male = {
              interest: string;
       }
       type MalePerson = Person & Male;

       interface User {
              name: string;
              age?: number;
              isLoggedIn: boolean
       }
       let user1: User;
       let users: User[];

       type MaleUser = User & Male;

       interface FemaleUser extends User {
              interest: string;
       }

       ///////// Basic Types
       name = 'XXX';
       age = 10;
       isLoggedIn = true;
       hobbies = ['Reading', 'Singing']
       role = [1, 'Admin']
       id = 10; //OR 
       id = 'Id1';
       let text: stringOrNumber = 'string'

       ///////// Any vs Unknown
       random = 'RRR';
       let s: string = random; //works; Any is assignbale to anything
       let n: number = random; //works; Any is assignbale to anything

       user1 = { name: 'XXX', age: 10, isLoggedIn: true }
       dataUnknown = user1; //works; Any type is assignbale to unknown
       dataUnknown = 'XXX'; //works; Any type is assignbale to unknown
       dataUnknown = 10; //works; Any type is assignbale to unknown

       //n = dataUnknown; //error; Uknown is not assignbale to anything

       ///////////
       let maleUser1: MaleUser = { name: 'Jack', age: 10, isLoggedIn: true, interest: 'gym' }
       let femaleUser1: FemaleUser = { name: 'Jack', age: 10, isLoggedIn: true, interest: 'reading' }

       return (
              <div className='m-5'>

                     <div className='myCard'>
                            <b>String Type</b>
                            <br />
                            <code> let name : string;  </code>
                            <br></br>
                            <code> name = 'XXX'; </code>
                            <br></br>
                            <code className='result'>&#123;name&#125; : {name}</code>
                     </div>

                     <div className='myCard'>
                            <b>Number Type</b>
                            <br />
                            <code>  let age : number; </code>
                            <br></br>
                            <code> age = 10; </code>
                            <br></br>
                            <code className='result'>&#123;age&#125; : {age}</code>
                     </div>

                     <div className='myCard'>
                            <b>Boolean Type</b>
                            <br />
                            <code> let isLoggedIn : boolean;  </code>
                            <br></br>
                            <code> isLoggedIn = true; </code>
                            <br></br>
                            <code className='result'>&#123;isLoggedIn&#125; : {isLoggedIn} true</code>
                     </div>

                     <div className='myCard'>
                            <b>Array Type</b>
                            <br />
                            <code> let hobbies : string[];  </code>
                            <br></br>
                            <code> hobbies = ['Reading','Singing'] </code>
                            <br></br>
                            <code className='result'>&#123;JSON.stringify(hobbies)&#125; : {JSON.stringify(hobbies)}</code>
                     </div>

                     <div className='myCard'>
                            <b>Tuple Type</b>
                            <br />
                            <code> let role : [number,string]  </code>
                            <br></br>
                            <code> role = [1,'Admin'] </code>
                            <br></br>
                            <code className='result'>&#123;JSON.stringify(role)&#125; : {JSON.stringify(role)}</code>
                            <br></br>
                            <div className='errorCard'>
                                   <b className='error'>Error</b>
                                   <br></br>
                                   <code> role = [1,2] </code>
                                   <br></br>
                                   <span className='error'>Type 'number' is not assignable to type 'string'.</span>
                                   <br></br>
                                   <code>role = [1,'Admin',true] </code>
                                   <br></br>
                                   <span className='error'>Type '[number, string, boolean]' is not assignable to type '[number, string]'.
                                          Source has 3 element(s) but target allows only 2.</span>

                            </div>
                     </div>

                     <div className='myCard'>
                            <b>Union Type</b>
                            <br></br>
                            <code>let id : string | number;  </code>
                            <br></br>
                            <code>id = 10 </code>
                            <br></br>
                            <code>id = 'Id1'</code>
                            <div className='result'>&#123;id&#125; : {id}</div>
                            <div className='errorCard'>
                                   <b className='error'>Error</b>
                                   <br></br>
                                   <code>id = true </code>
                                   <br></br>
                                   <span className='error'>Type 'boolean' is not assignable to type 'string | number'</span>
                            </div>

                     </div>

                     <div className='myCard'>
                            <b>Any Type</b>
                            <br />
                            <code>let random : any;  </code>
                            <br></br>
                            <code>random = 'RRR';</code>
                            <br></br>
                            <code>let s:string = random; //works; Any is assignbale to anything</code>
                            <br></br>
                            <code>let n:number = random; //works; Any is assignbale to anything</code>
                            <br></br>
                            <code className='result'> &#123;random&#125; : {random}</code>
                     </div>

                     <div className='myCard'>
                            <b>Type Aliases</b>
                            <br />
                            <code>type stringOrNumber = string | number;  </code>
                            <br></br>
                            <code>let text:stringOrNumber = 'string' </code>
                            <br></br>
                            <code className='result'>&#123;text&#125; : {text}</code>
                     </div>

                     <div className='myCard'>
                            <b>Uknown Type</b>
                            <br />
                            <code> let dataUnknown : unknown;  </code>
                            <br></br>
                            <code>dataUnknown = 'XXX'; //works; All the types are assignbale to unknown</code>
                            <br></br>
                            <code>dataUnknown = 10; //works; All the types are assignbale to unknown</code>
                            <br></br>
                            <code className='result'>&#123;dataUnknown as stringOrNumber&#125; : {dataUnknown as stringOrNumber} //<i>Render Unknown</i></code>
                            <br></br>
                            <code className='result'>&#123;typeof dataUnknown === 'number' && &#123; dataUnknown &#125; &#125; : {typeof dataUnknown === 'number' && <>{dataUnknown}</>} //<i>Render Unknown</i></code>

                            <div className='errorCard'>
                                   <b className='error'>Error</b>
                                   <br></br>
                                   <code>&#123;dataUnknown&#125;</code>
                                   <span className='error' > Type 'unknown' is not assignable to type 'ReactNode' </span>
                            </div>
                     </div>


                     <div className='myCard'>
                            <b>Object Types</b>
                            <br></br>
                            <code>type stringOrNumber = string | number;  </code>

                            <div dangerouslySetInnerHTML={{
                                   __html: `<code>type Person = {
                                                            id:stringOrNumber;
                                                            name:string;
                                                            age?:number;
                                                            isLoggedIn:boolean;
                                                        }</code>` }} />
                            <div dangerouslySetInnerHTML={{ __html: `<code>let person1 : Person;  let persons : Person[] = [] ;</code>` }} />
                            <div dangerouslySetInnerHTML={{ __html: `<code>person1 = {name:'XXX',id:1,isLoggedIn:true}; persons.push(person1)</code>` }} />
                            <code className='result'>&#123; JSON.stringify(persons) &#125; : {JSON.stringify(persons)}</code>
                            <div className='errorCard'>
                                   <b className='error'>Error</b>
                                   <br></br>
                                   <code>persons.push('Hello')</code>
                                   <br></br>
                                   <span className='error'>Argument of type 'string' is not assignable to parameter of type 'Person'.</span>
                            </div>
                     </div>

                     <div className='myCard'>
                            <b>Object Types Extension</b>
                            <br></br>
                            <div dangerouslySetInnerHTML={{
                                   __html: `<code>type Male = {
                                                                    interest : string;
                                                                }</code>` }} />
                            <div dangerouslySetInnerHTML={{ __html: `<code>type MalePerson = Person & Male;</code>` }} />
                            <div dangerouslySetInnerHTML={{ __html: `<code>let maleUser1 : MaleUser = {name:'Jack',age:10,isLoggedIn:true,interest:'Jogging'}</code>` }}></div>
                     </div>

                     <div className='myCard'>
                            <b>Interface Types</b>
                            <br></br>
                            <div dangerouslySetInnerHTML={{
                                   __html: `<code>interface User{
                                                                name:string;
                                                                age?:number;
                                                                isLoggedIn:boolean
                                                            }</code>` }} />
                            <div dangerouslySetInnerHTML={{ __html: `<code>let user1 : User;  let users : User[];</code>` }} />
                     </div>

                     <div className='myCard'>
                            <b>Interface Types Extension</b>
                            <br></br>
                            <div dangerouslySetInnerHTML={{ __html: `<code>interface FemaleUser extends User{interest : string;}</code>` }} />
                            <div dangerouslySetInnerHTML={{ __html: `<code>let femaleUser1 : FemaleUser = {name:'She',age:10,isLoggedIn:true,interest:'Reading'}</code>` }} />
                     </div>


                     <div className='myCard'>
                            <b>Function Types</b>
                            <br></br>
                            <div>Void Returns undefined</div>
                            <div dangerouslySetInnerHTML={{ __html: `<code>let printerFun:(name:string,age:number) => void; </code>` }}></div>
                            <div>Never Returns nothing</div>
                            <div dangerouslySetInnerHTML={{ __html: `<code>let loggerFun:(name:string,age:number) => never; </code>` }}></div>
                     </div>

                     <div className='myCard'>
                            <b>UseRef Type</b>
                            <br></br>
                            <div dangerouslySetInnerHTML={{ __html: `<code>const ref=useRef&lt;HTMLInputElement&gt;(null);</code>` }}></div>
                            <div dangerouslySetInnerHTML={{ __html: `<code>&lt;input ref={ref} className='col-2' placeholder='Press Enter to Set' type="text" /&gt;  </code>` }}></div>
                     </div>

                     <div className='myCard'>
                            <b>UseState Type</b>
                            <br></br>
                            <div dangerouslySetInnerHTML={{ __html: `<code>const [state,setState] = useState&lt;string&gt;("");</code>` }}></div>
                     </div>

                     <div className='myCard'>
                            <b>Component Prop Types using Interface</b>
                            <br></br>
                            <div dangerouslySetInnerHTML={{ __html: `<code> &lt;Todo state={state} setState={setState} handleSubmit={handleSubmit}  /></code>` }} />
                            <div dangerouslySetInnerHTML={{
                                   __html: `<code> interface Props {
                                                               state: string;
                                                               setState: React.Dispatch&lt;React.SetStateAction&lt;string&gt;&gt;;
                                                               handleSubmit : (e:React.FormEvent) => void
                                                               } </code>`
                            }} />
                            <div dangerouslySetInnerHTML={{ __html: `<code> const Todo = ({state,setState,handleSubmit} : Props) => {return ( &lt;&gt;&lt;/&gt; ) } </code>` }} />
                     </div>

                     <div className='myCard'>
                            <b>Component Prop Types using Types</b>
                            <br></br>
                            <div dangerouslySetInnerHTML={{
                                   __html: `<code> type Props = {
                                                               todos:TodoModel[];
                                                               setTodos:React.Dispatch&lt;React.SetStateAction&lt;TodoModel[]>>;
                                                               handleDone:(id:number)=>void;
                                                               handleDelete:(id:number)=>void;
                                                               handleEdit:(id:number,name:string)=>void;
                                                               } </code>` }} />
                            <div dangerouslySetInnerHTML={{
                                   __html: `<code> const TodosList = ({todos,setTodos,handleDone,handleDelete,handleEdit}:Props) => {
                                                               return (&lt;&gt;&lt;/&gt;)} </code>` }} />
                     </div>


                     <div className='myCard'>
                            <b>Restricted Types</b>
                            <br></br>
                            <div dangerouslySetInnerHTML={{
                                   __html: `<code> type StatusProps = {
                                                               status : 'Loading' | 'Success' | 'Error';
                                                               }
                                                               <br/>
                                                         const StatusComp = (props:StatusProps) => {return(&lt;>{props.status}&lt;/>) } </code>` }} />
                            <div dangerouslySetInnerHTML={{ __html: `<code>&lt;StatusComp status='Success' /&gt; </code>` }} />
                            <div className='errorCard'>
                                   <b className='error'>Error</b>
                                   <div dangerouslySetInnerHTML={{ __html: `<code>&lt;StatusComp status='Something Else' /&gt; </code>` }} />
                                   <span className='error'>Type '"Something Else"' is not assignable to type '"Loading" | "Success" | "Error"'</span>
                            </div>
                     </div>

                     <div className='myCard'>
                            <b>Children Types</b>
                            <br></br>
                            <div dangerouslySetInnerHTML={{
                                   __html: `<code>type StatusProps = {
                                                               children: React.ReactNode;
                                                               } </code>` }} />
                            <div dangerouslySetInnerHTML={{ __html: "<code> const StatusComp = (props:StatusProps) => {return(&lt;&gt;{props.children}&lt;/&gt;) } </code>" }} />

                            <div dangerouslySetInnerHTML={{ __html: "<code> &lt;StatusComp status='Success'&gt; Some more status info. &lt;/StatusComp&gt; </code>" }} />

                     </div>

                     <div className='myCard'>
                            <b>Generic Types</b>
                            <br></br>
                            <div dangerouslySetInnerHTML={{ __html: `<code> type ObjectListProps&lt;T&gt; = { data: T[]  }  </code>` }} />
                            <div dangerouslySetInnerHTML={{ __html: `<code> const ObjectListComp = &lt;T extends {id:number}&gt;(props:ObjectListProps&lt;T&gt;) => { return(&lt;&gt;&lt;/&gt;)  }  </code>` }} />

                            <div>Pass data of any List type but id is a mandatory key property in the list </div>
                            <div dangerouslySetInnerHTML={{
                                   __html: `<code>  const objectList = [
                                                               {id:1,name:'Jack',age:10},
                                                               {id:2,name:'Jim',age:12},
                                                               {id:3,name:'Han',age:15}
                                                               ] </code>` }} />

                            <div dangerouslySetInnerHTML={{ __html: `<code> &lt;ObjectListComp data={objectList} / &gt; </code>` }} />
                            <div className='errorCard'>
                                   <b className='error'>Error</b>
                                   <div dangerouslySetInnerHTML={{ __html: `<code> const objectList = [ {name:'Jack',age:10}] </code>` }} />
                                   <code dangerouslySetInnerHTML={{
                                          __html: `Type '{ name: string; age: number; }[]' is not assignable to type '{ id: number; }[]'.
  Property 'id' is missing in type '{ name: string; age: number; }' but required in type '{ id: number; }'.`}} className='error'></code>

                            </div>

                     </div>

                     <div className='myCard'>
                            <b>Never Type with Type Extension</b>
                            <br></br>
                            <div dangerouslySetInnerHTML={{
                                   __html: `<code> type language = {
                                                                      typed : boolean;
                                                                      compiled : boolean;
                                                                      interpreted : boolean;
                                                                      }  </code>` }} />
                            <div dangerouslySetInnerHTML={{
                                   __html: `<code> type backend = {
                                                                      hosting: string[];
                                                                      databases: string[];

                                                                      style: never;
                                                                      browsers: never;
                                                                      }  </code>`}} />

                            <div dangerouslySetInnerHTML={{
                                   __html: `<code> type frontend = {
                                                                      style: string[];
                                                                      browsers: string[];

                                                                      hosting: never;
                                                                      databases: never;
                                                                      } </code>`}} />

                            <div dangerouslySetInnerHTML={{ __html: `<code> type frontendLanguage = language | frontend; </code>` }} />

                            <div dangerouslySetInnerHTML={{
                                   __html: `<code> let javascript : frontendLanguage = {typed:false,compiled:true,interpreted:true,style:[],browsers:[]}
 </code>` }} />
                            <div className='errorCard'>
                                   <b className='error'>Error</b>
                                   <div dangerouslySetInnerHTML={{
                                          __html: `<code> let javascript : frontendLanguage = {typed:false,compiled:true,interpreted:true,style:[],browsers:[],databases:[]}
 </code>` }} />
                                   <code dangerouslySetInnerHTML={{ __html: `Type 'never[]' is not assignable to type 'never'.` }} className='error'></code>

                            </div>

                     </div>


                     <div className='myCard'>
                            <b>Exclude Types</b>
                            <br></br>
                            <div dangerouslySetInnerHTML={{ __html: `<code>type snb = string | number | boolean; </code>` }} />
                            <div dangerouslySetInnerHTML={{ __html: `<code> type user = {id : Exclude&lt;snb,boolean&gt;;} </code>` }} />
                            <div dangerouslySetInnerHTML={{ __html: `<code>  const user1 : user = {id:1} <br/> const user2 : user = {id:'a'} </code>` }} />
                            <div className='errorCard'>
                                   <b className='error'>Error</b>
                                   <div dangerouslySetInnerHTML={{ __html: `<code> const user3 : user = {id:true} </code>` }} />
                                   <code dangerouslySetInnerHTML={{ __html: `Type 'boolean' is not assignable to type 'string | number'.` }} className='error'></code>

                            </div>
                     </div>

                     <div className='myCard'>
                            <b>Html Component Types</b>
                            <br></br>
                            <div dangerouslySetInnerHTML={{
                                   __html: `<code> type Props = {
                                                               state: string;
                                                               setState: React.Dispatch&lt;React.SetStateAction&lt;string&gt;&gt;;
                                                               handleSubmit : (e:React.FormEvent) => void
                                                               } & React.ComponentProps&lt;'div'&gt;
                                                               <br/>
                                                               const Todo = ({state,setState,handleSubmit} : Props) => {return (&lt;&gt;&lt;/&gt;)} </code>` }} />
                            <div dangerouslySetInnerHTML={{ __html: `<code> &lt;Todo onClick={()=>{}} state={state} setState={setState} handleSubmit={handleSubmit}  /&gt; </code>` }} />
                            <div className='errorCard'>
                                   <b className='error'>Error</b>
                                   <div dangerouslySetInnerHTML={{
                                          __html: `<code> type Props = {state: string;  setState: React.Dispatch&lt;React.SetStateAction&lt;string&gt;&gt;;
                                                               handleSubmit : (e:React.FormEvent) => void
                                                               } 
                                                               <br/>
                                                               const Todo = ({state,setState,handleSubmit} : Props) => {return (&lt;&gt;&lt;/&gt;)} </code>` }} />
                                   <div dangerouslySetInnerHTML={{ __html: `<code> &lt;Todo onClick={()=>{}} state={state} setState={setState} handleSubmit={handleSubmit}  /&gt; </code>` }} />

                                   <code dangerouslySetInnerHTML={{
                                          __html: `Type '{ onClick: () => void; state: string; setState: Dispatch&lt;SetStateAction&lt;string&gt;&gt;; handleSubmit: (e: FormEvent&lt;Element&gt;) => void; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'onClick' does not exist on type 'IntrinsicAttributes & Props'.`}} className='error'></code>

                            </div>
                     </div>


                     <div className='myCard'>
                            <b>Extracting Props of Other Components</b>
                            <br></br>
                            <div>Usecase : Extracting props from external libraries</div>
                            <div dangerouslySetInnerHTML={{ __html: `<code> type PrinterProps = {message:string} </code>` }} />
                            <div dangerouslySetInnerHTML={{ __html: `<code> const Printer = (props:PrinterProps) => {return(&lt;&gt;&lt;/&gt;)} </code>` }} />
                            <div dangerouslySetInnerHTML={{ __html: `<code> const logger = (props:React.ComponentProps&lt;typeof Printer&gt;) => {return(&lt;&gt;&lt;/&gt;)} </code>` }} />

                     </div>

              </div>
       )
}

export default BasicTypes
