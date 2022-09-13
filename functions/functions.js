//Encryptor Function

function wordEncryptor_v1(word){
    
    let vocals_list = ['a','e','i','o','u']
    let subtitutions = ['ai','enter','imes','ober','ufat']
    let input_str = word

    let input_arr = input_str.split('');
    //console.log(input_arr)

    //First Comparative For Cicle
    for (i=0; i < input_arr.length; i++) {
        //console.log('Comparing *' + input_arr[i] + '* with vocals list')
        //Second For Cicle - Identify and Swap
        for(j=0; j < vocals_list.length; j++){
            if (input_arr[i] === vocals_list[j]) {
                //console.log('Itering in the character = ' + vocals_list[j] + ' > index = '+ j)
                //console.log('Match: Yes')

                //Swaping
                input_arr[i] = subtitutions[j]
                //console.log(input_arr);

         //if (input_arr[i] !== vocals_list[j]){
            // console.log('Match: No')
         //}  
            }
        }
    }
    let output_str = input_arr.join('')
    //console.log('Encrypted text -------> ' + output_str)
    word = output_str;
    return word;
}