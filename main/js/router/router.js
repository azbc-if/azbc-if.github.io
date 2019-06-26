function router(parameter)
{
    routine_key = query(parameter)
    array = eval(parameter.toString())
    if ( routine_key in array ) {
        window[array[routine_key]]();
    }
}
