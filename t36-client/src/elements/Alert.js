import Swal from 'sweetalert2';

const alertSuccess = ({title, text}) => {
    Swal.fire({
        title: title,
        text: text,
        icon: 'success',
        timer: 1400,
    })
}

const alertError = ({title, text}) => {
    Swal.fire({
        title: title,
        text: text,
        icon: 'error',
        timer: 1400,
    })
}

const alertInfo = ({title, text}) => {
    Swal.fire({
        title: title,
        text: text,
        icon: 'info',
        timer: 1400,
    })
}

const alertConfirm = ({title, text, onConfirmText, callback = () => {}}) => {
    Swal.fire({
        title: title,
        text: text,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: "Si",
        denyButtonText: "No"
    }).then(res => {
        if(res.isConfirmed) {
            callback()
        }
    })
}
 
export {alertSuccess, alertError, alertInfo, alertConfirm};