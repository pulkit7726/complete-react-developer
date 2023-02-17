import React,{Component, useEffect, useState} from 'react';
import CardListComponent from './FunctionalComponent/CardList/CardListComponent';
import SearchBoxComponent from './FunctionalComponent/SearchBox/SearchBoxComponent';
import './InputSearch.css';

const InputSearch = () => {

  const [mapArray, setMapArray] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filterAraay, setFilterArray] = useState(mapArray);

  const onChangeHandler = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();            
    setSearchField(searchString);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((user) => setMapArray(user))
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    const newArrayFilter = mapArray.filter((filterValue) => {
      return filterValue.name.toLocaleLowerCase().includes(searchField)
    });
    setFilterArray(newArrayFilter)
  }, [mapArray, searchField])


  
  return (
    <div>
      <h1 className='input-title'>Input Search Data</h1>
      <SearchBoxComponent onChangeHandler={onChangeHandler}/>
      <CardListComponent filterAraay={filterAraay}/>
    </div>
  );
}


// class InputSearch extends Component{

//   constructor(){
//     super();
//     this.state = {
//       mapArray: [],
//       searchField: ''
//     }
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((user) => 
//       this.setState(
//         () => {
//             return {mapArray: user}
//         }
//       )
//       )
//       .catch((error) => console.log(error))
//   }

//   onChangeHandler = (event) => {
//     const searchString = event.target.value.toLocaleLowerCase()            
//     this.setState(() => {
//         return {searchField: searchString}
//     })
// }
 
//   render(){
//     const {mapArray, searchField} = this.state;
//     const {onChangeHandler} = this;
//     const mapArrayFilter = mapArray.filter((filterValue) => {
//         return filterValue.name.toLocaleLowerCase().includes(searchField)
//     });

//     return (
//       <div>
//         <h1 className='input-title'>Input Search Data</h1>
//         <SearchBoxComponent onChangeHandler={onChangeHandler}/>
//         {/* {
//             mapArrayFilter.map((value) => {
//                 return <p key={value.id}>{value.name}</p>
//             })
//           }*/}
//           <CardListComponent mapArrayFilter={mapArrayFilter}/>
//       </div>
//     );
//   }
  
// }

export default InputSearch;
