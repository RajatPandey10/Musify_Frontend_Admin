import DashboardLayout from '../layout/DashboardLayout.jsx';
import {useState} from 'react';
import {Image} from 'lucide-react';

const AddAlbums = ()=>{
    const [image,setImage] = useState(false);
    const [color,setColor] = useState('');
    const [name,setName] = useState('');
    const [desc,setDesc] = useState('');
    const [loading,setLoading] = useState(false);

    const onSubmitHandler = (e)=>{

    }


     return (
        <DashboardLayout activeMenu='Add Album'>
            {loading ? (
                <div className='grid place-items-center min-h-[80vh]'>
                    <div className='w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin'></div>
                </div>
            ):(
                <form onSubmit={onSubmitHandler} className='flex flex-col items-start gap-8 text-gray-600 mt-5'>
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

                </form>
            )}
        </DashboardLayout>
     )
}

export default AddAlbums;