import React from 'react'

function Bootstrap() {
    const divStyle = {
        backgroundColor: '#198754',
        color: 'green-500',
        fontWeight: "20px",
        margin: "40px",

    };

    const paragraphStyle = {
        color: '#00ff00',
        fontSize: '12px',
    };
    return (
        <>
            <div class="container-fluid col-gy-3 border  ">
                <h1 class=' col-auto p-5   fw-bolder border rounded-5 ' style={divStyle}>
                    Heading 1
                    <div className='border border-warning rounded p-2 m-3 fs-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi deleniti, perferendis placeat mollitia cum perspiciatis repudiandae delectus harum beatae quod. Adipisci facere qui officia! Voluptatibus ullam quaerat autem soluta dolorum.</div>
                </h1>
                <h1 className=' col-auto p-5   bg-dark fw-bolder text-white ' style={divStyle}>
                    Heading 2
                    <div className='border border-success m-3 p-2 rounded fs-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi deleniti, perferendis placeat mollitia cum perspiciatis repudiandae delectus harum beatae quod. Adipisci facere qui officia! Voluptatibus ullam quaerat autem soluta dolorum.</div>
                </h1>
                <h1 class='col-auto p-5  fw-bolder text-red' style={divStyle} >
                    Heading 3
                    <div className='border border-danger fs-4 p-2 m-3 rounded'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aspernatur et maiores! Veritatis tenetur, nisi culpa distinctio veniam perspiciatis. Quia sint repellat laudantium amet. Rem quod ad beatae itaque inventore.</div>
                </h1>
            </div>
        </>
    )
}

export default Bootstrap