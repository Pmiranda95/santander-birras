
const initialState = {
  checking: true,
  imagenPerfil: null,
  userName: '',
  idUsuario: 0,
  recordar: false,
  permisos:null
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "types.authLogin":
      return {
        ...state,
        checking: false,
        ...action.payload,
      };
    case "types.checkingFinished":
      return {
        ...state,
        checking: false,
      };
      case "types.authLogout":
        return {
          checking: false,
        }
    default:
      return state;
  }
};
