/**
 * Created by Moses.Zhu on 16-6-12.
 */
var langUtil = (function () {
    var lang_name = "Name",
        lang_password = "Password",
        setLanguage;

    setLanguage = function () {
        $(".lang_name").text(lang_name);
        $(".lang_password").text(lang_password);
    };

    return {setLanguage : setLanguage};
}());