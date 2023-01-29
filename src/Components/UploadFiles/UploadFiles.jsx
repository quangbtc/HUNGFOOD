import { Add, DeleteOutline, Edit, Remove } from '@mui/icons-material';
import { memo } from 'react';
import ImageUploading from 'react-images-uploading';
import styled, { css } from 'styled-components';

const WrapperUpload = styled.div``;
const WrapperButton = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    .addImage {
        outline: none;
        border: 0.5px solid green;
        background-color: transparent;
        border-radius: 5px;
        padding: 5px 12px;
        &:hover {
            background-color: green;
            color: white;
        }
    }
    .removeImage {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: none;
        background-color: red;
        color: white;
        opacity: 0.7;
        &:hover {
            opacity: 1;
        }
    }
`;
const ImgList = styled.div`
    width: 530px;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin: 10px auto;
`;
const ImgItem = styled.div`
    width: 125px;
    height: 80px;
    border: 1px solid #3333;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 5px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    display: flex;
    align-items: center;
    justify-content: space-between;

    .btn-edit {
        position: absolute;
        top: 0;
        left: 0;
        color: green;
        background: transparent;
        border: none;

        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: white;
        opacity: 0.7;

        &:hover {
            opacity: 1;
        }
    }
    .btn-remove {
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
        top: 0;
        color: red;
        background-color: white;
        opacity: 0.7;
        border: none;

        &:hover {
            opacity: 1;
        }
    }
`;

const UploadFiles = ({ images, maxNumber, handleSetImageListFromParent }) => {
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log("check",imageList, addUpdateIndex);
        handleSetImageListFromParent(imageList);
    };

    return (
        <div>
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                    // write your building UI
                    <WrapperUpload>
                        <WrapperButton>
                            <button
                                className="addImage"
                                style={isDragging ? { color: 'red' } : undefined}
                                onClick={(e)=>{
                                    e.preventDefault()
                                    onImageUpload()}}
                                {...dragProps}
                            >
                                Add images
                                <Add />
                            </button>
                            {images && images.length > 0 && (
                                <button
                                    className="removeImage"
                                    onClick={onImageRemoveAll}
                                >
                                    <DeleteOutline />
                                </button>
                            )}
                        </WrapperButton>
                        <ImgList>
                            {imageList.map((image, index) => (
                               
                                <ImgItem key={index}>
                                    <img src={image} alt="" />
                                   
                                    <button
                                        className="btn-edit"
                                        onClick={() => onImageUpdate(index)}
                                    >
                                        <Edit />
                                    </button>
                                    <button
                                        className="btn-remove"
                                        onClick={() => onImageRemove(index)}
                                    >
                                        <Remove />
                                    </button>
                                </ImgItem>
                            ))}
                        </ImgList>

                    </WrapperUpload>
                )}
            </ImageUploading>
        </div>
    );
};

export default memo(UploadFiles);
