function formdata(data){
    /*Ім'я*/
    if (data.full_name != null && data.full_name.value.length < 3 )
    {
        alert('Заповніть поле "Ваше им’я"');
        return false;}

    if(!(/^[А-ЯЇЄІ][а-яїєі]{1,14} [А-ЯЇЄІ]. [А-ЯЇЄІ].$/.test(data.full_name.value)))
    {
        alert('"Ваше Прізвище і ініціали" вказані невірно');
        return false;}

    /* Група */
    if (data.groupe != null && data.groupe.value.length === 0 )
    {
        alert('Заповніть поле "Група"');
        return false;}

    if(!(/^[А-ЯЇЄІ]{1,3}-[0-9]{1,3}$/.test(data.groupe.value)))
    {
        alert('"Група" вказана невірно');
        return false;}

    /* Телефон */
    if(data.phone != null && data.phone.value.length === 0)
    {
        alert('поле "Телефон" пусте');
        return false;}

    if(data.phone != null && data.phone.value.length < 5)
    {
        alert('поле "Телефон" повинно містити мінімум п’ять символів');
        return false;}

    if(!(/^[0-9-+()s]+z/.test(data.phone.value+"z")))
    {
        alert('"Контактний телефон" вказано невірно');
        return false;}

    /* ID-карта */
    if (data.card != null && data.card.value.length === 0 )
    {
        alert('Заповніть поле "ID-карта"');
        return false;}

    if(!(/^[А-ЯЇЄІ]{1,2} №[0-9]{6,10}$/.test(data.card.value)))
    {
        alert('"ID-карта" вказана невірно');
        return false;}

    /* Факультет */
    if (data.faculty != null && data.faculty.value.length === 0 )
    {
        alert('Заповніть поле "Факультет"');
        return false;}

    if(!(/^[А-ЯЇЄІ]{1,15}$/.test(data.faculty.value)))
    {
        alert('"Факультет" вказаний невірно');
        return false;}

    alert("ПІБ: "+document.getElementById("full_name").value+
        "\nГрупа: "+document.getElementById("groupe").value+
        "\nТелефон: "+document.getElementById("phone").value+
        "\nID-карта: "+document.getElementById("card").value+
        "\nФакультет: "+document.getElementById("faculty").value)
}
