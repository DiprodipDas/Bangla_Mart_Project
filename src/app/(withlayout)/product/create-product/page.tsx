"use client";
const CreateProductPage = () => {
  return (
    <div className=' p-3'>
      <div>
        <div className='text-sm breadcrumbs'>
          <ul>
            <li>
              <a>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='w-4 h-4 stroke-current'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                  ></path>
                </svg>
                Home
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='w-4 h-4 stroke-current'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                  ></path>
                </svg>
                Documents
              </a>
            </li>
            <li>
              <span className='inline-flex gap-2 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='w-4 h-4 stroke-current'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  ></path>
                </svg>
                Add Document
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className=' border-solid border-2 rounded border-gray-600'>
        <form className='p-2'>
          <div className='grid grid-cols-2 gap-3'>
            <div>
              <label className='form-control w-full '>
                <div className='label'>
                  <span className='label-text'>Product Name</span>
                </div>
                <input
                  type='text'
                  name='productName'
                  placeholder='Type here'
                  className='input input-bordered w-full '
                />
              </label>
            </div>

            <div>
              <label className='form-control w-full '>
                <div className='label'>
                  <span className='label-text'>Product Price</span>
                </div>
                <input
                  type='text'
                  placeholder='Type here'
                  className='input input-bordered w-full '
                />
              </label>
            </div>
            <div>
              <label className='form-control w-full '>
                <div className='label'>
                  <span className='label-text'>Product Quantity</span>
                </div>
                <input
                  type='number'
                  placeholder='Type here'
                  className='input input-bordered w-full '
                />
              </label>
            </div>
            <div>
              <label className='form-control w-full '>
                <div className='label'>
                  <span className='label-text'>Product Weight</span>
                </div>
                <input
                  type='number'
                  placeholder='Type here'
                  className='input input-bordered w-full '
                />
              </label>
            </div>
            <div className='col-span-2'>
              <label className='form-control w-full '>
                <div className='label'>
                  <span className='label-text'>Product Description</span>
                </div>
                <textarea
                  name='description'
                  className='textarea textarea-bordered h-24 w-full'
                  placeholder='Type hare'
                ></textarea>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProductPage;
