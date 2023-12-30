function VS(props){
    return(
        <>

<div class="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center bg-black">
        <div class="mx-5 lg:w-9/12 bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
           
            <div id="code-area" class="py-4 px-4 mt-1 text-black text-xl h-auto">
                <textarea spellCheck="false" rows={"10"} style={{width:"100%",resize:"none",overflow:"hidden"}} autoFocus className="outline-none border-transparent bg-transparent text-white active:border-transparent" placeholder="Start Typing.."></textarea>
            </div>
        </div>
    </div>



        </>
    )
}
export default VS