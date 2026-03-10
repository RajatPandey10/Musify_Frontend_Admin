import DashboardLayout from '../layout/DashboardLayout.jsx';
import {useState} from 'react';

const AddSong = ()=>{
    const [image,setImage] = useState(false);
        const [song,setSong] = useState(false);
        const [name,setName] = useState('');
        const [desc,setDesc] = useState('');
        const [album,setAlbum] = useState("none");
        const [loading,setLoading] = useState(false);
        const [albumData,setAlbumData] = useState([]);
        const onSubmitHandler = (e)=>{

    }
    return (
        <DashboardLayout activeMenu='Add Song'>
            <div>Add new song</div>
        </DashboardLayout>
    )
}

export default AddSong;