import DashboardLayout from '../layout/DashboardLayout.jsx';
import {useState,useEffect} from 'react';
import {Music,Check,Image} from 'lucide-react';
import {toast} from 'react-hot-toast';
import { albumsAPI } from '../services/apiService';


const AddSong = ()=>{
    const [image,setImage] = useState(false);
    const [song,setSong] = useState(false);
    const [name,setName] = useState('');
    const [desc,setDesc] = useState('');
    const [album,setAlbum] = useState("none");
    const [loading,setLoading] = useState(false);
    const [albumData,setAlbumData] = useState([]);

    const onSubmitHandler = async (e)=>{
        
    }

    const loadAlbumData= async()=>{
        try{
            const response = await albumsAPI.list();
            setAlbumData(response.data.albums);
        }catch(error){
            toast.error("Failed to load albums");
        }
    }

    useEffect(()=>{
        loadAlbumData();
    },[])

    return (
        <DashboardLayout activeMenu='Add Song'>
            {loading ? (
                <div className='grid place-items-center min-h-[80vh]'>
                    <div className='w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin'></div>
                </div>
            ):(
                 <form onSubmit={onSubmitHandler} className='flex flex-col items-start gap-8 text-gray-600 mt-5'>

                    <div className='flex gap-8'>
                        {/* upload song */}
                        <div className='flex flex-col gap-4'>
                            <p>Upload Song</p>
                            <input 
                                onChange = {(e)=>{setSong(e.target.files[0])}}
                                type='file'
                                accept = 'audio/*'
                                id='song'
                                hidden
                            />
                            <label 
                                htmlFor='song'
                                className='flex flex-col items-center justify-center w-16 h-16 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-green-500 transition-colors overflow-hidden'>
                                {song ? (
                                    <Check className='w-8 h-8 text-green-500'/>    
                                ):(
                                    <Music className='w-8 h-8 text-gray-500'/>
                                )}
                            </label>
                            
                        </div>

                        {/* upload image */}
                        <div className='flex flex-col gap-4'>
                            <p>Upload Image</p>
                            <input 
                                onChange = {(e)=>{setImage(e.target.files[0])}}
                                type='file'
                                accept = 'image/*'
                                id='image'
                                hidden
                            />
                            <label 
                                htmlFor='image'
                                className='flex flex-col items-center justify-center w-16 h-16 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-green-500 transition-colors overflow-hidden'>
                                {image ? (
                                    <img src={URL.createObjectURL(image)} alt='Preview' className='w-full h-full object-cover rounded-lg'></img>
                                ):(
                                    <Image className='w-8 h-8 text-gray-500'/>
                                )}
                            </label>
                            
                        </div>
                    </div>

                    {/* Song name */}
                    <div className='flex flex-col gap-2.5'>
                        <p>Song name</p>
                        <input 
                            type='text'
                            className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(4vw,250px)]'
                            placeholder='Type here'
                            value = {name}
                            onChange = {(e)=> setName(e.target.value)}

                        />
                    </div>

                    {/* Song description */}
                    <div className='flex flex-col gap-2.5'>
                        <p>Song description</p>
                        <input 
                            type='text'
                            className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(4vw,250px)]'
                            placeholder='Type here'
                            value = {desc}
                            onChange = {(e)=> setDesc(e.target.value)}

                        />
                    </div>

                    {/* Albums */}

                    <div className='flex flex-col gap-2.5'>
                        <p>Album</p>
                        <select 
                            defaultValue= {album}
                            onChange = {(e)=> setAlbum(e.target.value)}
                            className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[150px]'>
                                <option value='none' >None</option>
                                
                                {albumData.map((album,index)=>(
                                    <option value={album.name} key={index}>{album.name}</option>
                                ))}
                            </select>

                    </div>

                    

                    {/* submit button */}
                    <button type='submit' className='text-base bg-[#3be477] text-white py-2.5 px-14 cursor-pointer '>
                        ADD
                    </button>




                </form>

            )}
        </DashboardLayout>
    )
}

export default AddSong;