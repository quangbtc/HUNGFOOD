import React, { useState, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import styled, { css } from 'styled-components';
import ProductApi from '../../../../api/Product';
import MyEditor from '../../Components/MyEditor';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../../../Components/Loading/Loading';
import { Close, Add, Upload } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Container = styled.div``;
const Head = styled.div`
    margin: 20px auto;
`;
const Text = styled.h3`
    padding: 10px 50px;
`;
const Wrapper = styled.div`
    margin: 20px 50px;
    display: flex;
    flex-direction: column;
`;
//=======LEFT========
const Left = styled.div`
    flex: 1;
`;
const Group = styled.div`
    display: flex;
`;
const Item = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    input {
        width: 100%;
        height: 40px;
    }
    .select {
        flex: 1;
        width: 100% !important;
        height: 40px !important;
        outline: none !important;
        margin-bottom: 40px !important;
    }
    .uploadFile {
        padding: 10px;
        border: 1px solid green;
        width: 200px;
        height: 40px;
        display: flex;
        align-items: center;
        background-color: transparent;
        gap: 10px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            background-color: green;
            color: white;
        }
    }
`;
const Label = styled.label`
    margin: 10px 0px;
`;
const Button = styled.button.attrs((props) => ({
    type: props.type,
}))`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    outline: ${(props) => (props.type === 'submit' ? 'none' : '1px solid #3333')};
    border: none;
    border-radius: 5px;
    background-color: ${(props) => (props.type === 'submit' ? 'blue' : 'transparent')};
    opacity: 0.7;

    &:hover {
        opacity: 1;
        color: white;
        background-color: green;
    }
`;

const WpButton = styled.div`
    margin-right: 60px;
    margin-left: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const ImgView = styled.div`
    position: relative;
    width: 200px;
    height: 120px;
    margin: 20px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
    span {
        position: absolute;
        right: 0;
        top: 0;
        color: red;
        cursor: pointer;
        opacity: 0.7;
        &:hover {
            opacity: 1;
        }
    }
`;
const ThumbPreview = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 10px;
    margin-top: 10px;
    width: 100%;
    .thumb-container {
        position: relative;

        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 24.5%;
        height: 120px;
        border-radius: 5px;
        span {
            position: absolute;
            right: 0;
            top: 0;
            color: red;
            cursor: pointer;
            opacity: 0.7;
            &:hover {
                opacity: 1;
            }
        }
    }
`;
//=======RIGHT=======
const Right = styled.div`
    flex: 1;
`;
//============END CSS==============
const AddProduct = () => {
    const navigate = useNavigate();
    const [imgProduct, setImgProduct] = useState(null);
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [preViewProduct, setPreviewProduct] = useState(null);
    const [preViewThumb, setPreviewThumb] = useState([]);
    const [productThumbs, setProductThumbs] = useState({});
    const inputRef = useRef();
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm();

    const sizeOption = [
        { value: 'XL', label: 'XL' },
        { value: 'XXL', label: 'XXL' },
        { value: 'L', label: 'L' },
        { value: 'M', label: 'M' },
    ];
    const colorOption = [
        { value: 'blue', label: 'MÀU XANH' },
        { value: 'red', label: ' MÀU ĐỎ' },
        { value: 'violet', label: 'MÀU TÍM' },
        { value: 'yellow', label: 'MÀU VÀNG' },
        { value: 'white', label: 'MÀU TRẮNG' },
        { value: 'black', label: 'MÀU ĐEN' },
    ];
    const handleUploadImgProduct = async (e) => {
        const data = e.target.files;

        const file = data[0];
        const preViewUrl = URL.createObjectURL(file);
        if (file) {
            setImgProduct(file);
            setPreviewProduct(preViewUrl);
        }
    };
    const handleOnInputFiles = (e) => {
        const data = e.target.files;
        let arrImg = [];
        for (let i = 0; i < data.length; i++) {
            let element = URL.createObjectURL(data[i]);
            arrImg.push(element);
        }
        if (arrImg && arrImg.length > 0) {
            setPreviewThumb(arrImg);
            setProductThumbs(Array.from(data));
        }
    };
    const handleDeletePreviewThumb = (index) => {
        preViewThumb.splice(index, 1);
        productThumbs.splice(index, 1);
        setPreviewThumb((prev) => [...prev]);
        setProductThumbs((prev) => [...prev]);
    };
    const getContent = (data) => {
        setContent(data);
    };
    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('categories', data.categories);
        formData.append('price', data.price);
        formData.append('saleOff', data.saleOff);
        formData.append('inStock', data.inStock);
        formData.append('imgProduct', imgProduct);
        formData.append('desc', data.desc);

        if (productThumbs && productThumbs.length > 0) {
            if (productThumbs) {
                for (let i = 0; i < productThumbs.length; i++) {
                    formData.append('thumbs', productThumbs[i]);
                }
            }
        }
        if (data.color && data.color.length > 0) {
            for (let i = 0; i < data.color.length; i++) {
                formData.append(`color[]`, JSON.stringify(data.color[i]));
            }
        }
        if (data.size && data.size.length > 0) {
            for (let i = 0; i < data.size.length; i++) {
                formData.append(`size[]`, JSON.stringify(data.size[i]));
            }
        }

        if (content) {
            formData.append('content', content);
        }
        if (formData) {
            try {
                setLoading(true);
                console.log('check loading', loading);
                const res = await ProductApi.createProduct(formData);
                console.log(res);
                if (res.data) {
                    setLoading(false);
                    toast.success('create product successfully!');
                    setContent('');
                    reset({
                        title: '',
                        desc: '',
                        price: '',
                        categories: '',
                        saleOff: '',
                    });
                    console.log(res);
                }
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        }
    };
    return (
        <Container>
            <Head>
                <Text>THEM THONG TIN SAN PHAM</Text>
            </Head>

            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <WpButton>
                    <Button color="primary" onClick={() => navigate(-1)}>
                        Quay lại
                    </Button>{' '}
                    <Button type="submit" color="primary">
                        Thêm sản phẩm
                        <Add />
                    </Button>{' '}
                </WpButton>
                <Wrapper>
                    <Left>
                        <Group>
                            <Item>
                                <Label>Tên sản phẩm</Label>
                                <input
                                    name="title"
                                    {...register('title', {
                                        required: 'Vui lòng nhập tên sảnn phẩm',
                                    })}
                                />
                                {errors.title && (
                                    <p style={{ color: 'red' }}>
                                        This is a required field.
                                    </p>
                                )}
                            </Item>
                        </Group>
                        <Group>
                            <Item>
                                <Label>Danh mục sản phẩm</Label>
                                <input
                                    name="categories"
                                    {...register('categories', {
                                        required: 'Vui lòng nhập tên danh mục ',
                                    })}
                                />
                                {errors.categories && (
                                    <p style={{ color: 'red' }}>
                                        This is a required field.
                                    </p>
                                )}
                            </Item>
                            <Item>
                                <Label>Giá (1K=1000đ)</Label>
                                <input
                                    type="text"
                                    name="price"
                                    {...register('price', {
                                        required: 'This field is empty!',
                                        pattern: {
                                            value: /^[0-9\b]+$/,
                                            message: 'This field is number',
                                        },
                                    })}
                                />
                                {errors.price && (
                                    <p style={{ color: 'red' }}>
                                        {errors.price?.type === 'required' &&
                                            errors.price.message}
                                        {errors.price?.type === 'pattern' &&
                                            errors.price.message}
                                    </p>
                                )}
                            </Item>
                            <Item>
                                <Label>Giảm giá (%)</Label>
                                <input
                                    type="text"
                                    name="saleOff"
                                    {...register('saleOff', {
                                        pattern: {
                                            value: /^[0-9\b]+$/,
                                            message: 'This field is number',
                                        },
                                    })}
                                />
                                {errors.saleOff && (
                                    <p style={{ color: 'red' }}>
                                        {errors.sale?.type === 'pattern' &&
                                            errors.saleOff.message}
                                    </p>
                                )}
                            </Item>
                            <Item>
                                <Label>Số lượng nhập (đơn vị : set)</Label>
                                <input
                                    type="text"
                                    name="inStock"
                                    {...register('inStock', {
                                        required: 'This field is empty!',
                                        pattern: {
                                            value: /^[0-9\b]+$/,
                                            message: 'This field is number',
                                        },
                                    })}
                                />
                                {errors.inStock && (
                                    <p style={{ color: 'red' }}>
                                        {errors.inStock?.type === 'required' &&
                                            errors.inStock.message}
                                        {errors.sale?.type === 'pattern' &&
                                            errors.inStock.message}
                                    </p>
                                )}
                            </Item>
                        </Group>
                        <Group>
                            <Item>
                                <Label>Size</Label>
                                <Controller
                                    name="size"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            className="select"
                                            isMulti
                                            options={sizeOption}
                                            styles={{
                                                control: (baseStyles, state) => ({
                                                    ...baseStyles,
                                                    borderColor: state.isFocused
                                                        ? 'red'
                                                        : 'grey',
                                                }),
                                                input: () => ({
                                                    with: '100%',
                                                }),
                                            }}
                                        />
                                    )}
                                />
                                {errors.size && (
                                    <p style={{ color: 'red', marginTop: 20 }}>
                                        This is a required field.
                                    </p>
                                )}
                            </Item>

                            <Item>
                                <Label>Color</Label>
                                <Controller
                                    name="color"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            className="select"
                                            isMulti
                                            options={colorOption}
                                            styles={{
                                                control: (baseStyles, state) => ({
                                                    ...baseStyles,
                                                    borderColor: state.isFocused
                                                        ? 'red'
                                                        : 'grey',
                                                }),
                                                input: () => ({
                                                    with: '100%',
                                                }),
                                            }}
                                        />
                                    )}
                                />
                                {errors.color && (
                                    <p style={{ color: 'red', marginTop: 20 }}>
                                        This is a required field.
                                    </p>
                                )}
                            </Item>
                        </Group>

                        <Group>
                            <Item>
                                <Label>Hình đại diện</Label>
                                <label htmlFor="file" className="uploadFile">
                                    Upload Image
                                    <Upload />
                                </label>
                                <input
                                    id="file"
                                    name="imgProduct"
                                    onInput={(e) => handleUploadImgProduct(e)}
                                    type="file"
                                    style={{ display: 'none' }}
                                    accept="image/png, image/jpeg"
                                />
                                {imgProduct && (
                                    <ImgView>
                                        <img src={preViewProduct} alt="" />
                                        <span
                                            onClick={() => {
                                                setImgProduct('');
                                                setPreviewProduct(null);
                                            }}
                                        >
                                            <Close />
                                        </span>
                                    </ImgView>
                                )}
                            </Item>
                            <Item>
                                <Label>Hình chi tiết</Label>
                                <label htmlFor="files" className="uploadFile">
                                    Upload Images
                                    <Upload />
                                </label>
                                <input
                                    style={{ display: 'none' }}
                                    type="file"
                                    id="files"
                                    multiple
                                    onInput={(e) => handleOnInputFiles(e)}
                                    accept="image/png, image/jpeg"
                                />
                                {preViewThumb.length > 0 && (
                                    <ThumbPreview>
                                        {preViewThumb.map((item, index) => {
                                            return (
                                                <div
                                                    className="thumb-container"
                                                    style={{
                                                        backgroundImage: `url(${item})`,
                                                    }}
                                                    key={index}
                                                >
                                                    <span>
                                                        <Close
                                                            onClick={() =>
                                                                handleDeletePreviewThumb(
                                                                    index,
                                                                )
                                                            }
                                                        />
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </ThumbPreview>
                                )}
                            </Item>
                        </Group>
                    </Left>
                    <Right>
                        <Group>
                            <Item>
                                <Label>Mô tả</Label>
                                <textarea
                                    name="desc"
                                    {...register('desc')}
                                    id=""
                                    cols="30"
                                    rows="5"
                                ></textarea>
                            </Item>
                        </Group>
                        <Group>
                            <Item>
                                <Label>Nội dung</Label>
                                <MyEditor getContent={getContent} />
                            </Item>
                        </Group>
                    </Right>
                </Wrapper>
            </form>
            {loading && <Loading type="spin" color="#4bad3a80" />}
            <ToastContainer />
        </Container>
    );
};

export default AddProduct;
