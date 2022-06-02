const Login = () => {
  return (
    <>
      <section className='h-full gradient-form bg-gray-200 md:h-screen'>
        <div className='container py-12 px-6 h-full'>
          <div className='flex justify-center items-center flex-wrap h-full g-6 text-red-800'>
            <div className='xl:w-10/12'>
              <div className='block bg-white shadow-lg rounded-lg'>
                <div className='lg:flex lg:flex-wrap g-0'>
                  <div className='lg:w-6/12 px-4 md:px-0'>
                    <div className='md:p-12 md:mx-6'>
                      <div className='text-center'>
                        <img
                          className='mx-auto h-28 w-24'
                          src='https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/60349837_2330788953876010_1663721454019018752_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=stYJg8WqMccAX8U3jy2&tn=NINS3E49KtkDJG59&_nc_ht=scontent-sin6-4.xx&oh=00_AT-fZC6SXhW0igVxGZUj7hgvi04vlwiDmVoLcqRB5HLnAw&oe=62BACDD0'
                          alt='logo'
                        />
                        <h4 className='text-xl font-semibold mt-1 mb-12 pb-1'>
                          Faridpur Engr. College Library
                        </h4>
                      </div>
                      <form>
                        <p className='mb-4'>Please login to your account</p>
                        <div className='mb-4'>
                          <input
                            type='text'
                            className='form-control  block w-full px-3 py-1.5 text-base font-normal text-red-700 bg-white bg-clip-padding border border-solid border-red-300 rounded transition ease-in-out m-0 focus:text-red-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                            id='exampleFormControlInput1'
                            placeholder='Username'
                          />
                        </div>
                        <div className='mb-4'>
                          <input
                            type='password'
                            className='form-control block w-full px-3 py-1.5 text-base font-normal text-red-700 bg-white bg-clip-padding border border-solid border-red-300 rounded transition ease-in-out m-0 focus:text-red-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                            id='exampleFormControlInput1'
                            placeholder='Password'
                          />
                        </div>
                        <div className='text-center pt-1 mb-12 pb-1'>
                          <button
                            className='gradient inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
                            type='button'
                            data-mdb-ripple='true'
                            data-mdb-ripple-color='light'
                          >
                            Log in
                          </button>
                          <a className='text-red-500' href='#!'>
                            Forgot password?
                          </a>
                        </div>
                        <div className='flex items-center justify-between pb-6'>
                          <p className='mb-0 mr-2'>Don't have an account?</p>
                          <button
                            type='button'
                            className='inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                            data-mdb-ripple='true'
                            data-mdb-ripple-color='light'
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className='lg:w-6/12 gradient flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none'>
                    <div className='text-white px-4 py-6 md:p-12 md:mx-6'>
                      <p className='text-xl text-justify'>
                        "The only thing that you absolutely have to know, is the
                        location of the library."
                      </p>
                      <h4 className='text-right font-semibold'>
                        Albert Einstein
                      </h4>
                      <p className='text-right text-xs'>(1879-1955) </p>
                      <h6 className='text-sm text-right '>
                        Theoretical physicist
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style jsx>
            {`
              .gradient {
                background: rgb(198, 37, 37);
                background: linear-gradient(
                  90deg,
                  rgba(198, 37, 37, 1) 11%,
                  rgba(209, 65, 113, 1) 44%,
                  rgba(191, 79, 79, 1) 89%
                );
              }
            `}
          </style>
        </div>
      </section>
    </>
  );
};

export default Login;
