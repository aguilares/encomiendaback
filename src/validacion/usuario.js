import { check } from "express-validator"
import { validaciones } from "./headers.js"

export const insertar = [

    check('username')
        .isLength({ min: 4 })
        .exists(),
    check('pass')
        .isLength({ min: 4 })
        .exists(),
    check('ci')
        .exists()
        .isLength({ min: 4 }),
    check('nombre')
        .isLength({ min: 4 })
        .exists(),
    check('apellidoPaterno')
        .isLength({ min: 4 })
        .exists(),
    check('apellidoMaterno')
        .isLength({ min: 4 })
        .exists(),
    check('correo')
        .exists()
        .matches(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/),
    check('telefono')
        .exists()
        .isNumeric()
        .isLength({ min: 4, max: 25 }),
    check('direccion')
        .exists()
        .isString()
        .isLength({ min: 5, max: 100 }),
    check('creado')
        .exists()
        .matches(/^\d{4}-\d{2}-\d{2} \d{1,2}:\d{2}:\d{2}$/),
    check('idServicio')
        .exists()
        .isLength({ min: 1 }).isNumeric(),

    (req, res, next) => {
        validaciones(req, res, next)
    }
]
export const actualizarMiPerfil = [

    check('nombre')
        .isLength({ min: 4 })
        .exists(),
    check('apellidoPaterno')
        .isLength({ min: 4 })
        .exists(),
    check('apellidoMaterno')
        .isLength({ min: 4 })
        .exists(),
    check('ci')
        .exists()
        .isLength({ min: 4 }),
    check('correo')
        .exists()
        .matches(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/),
    check('telefono')
        .exists()
        .isNumeric()
        .isLength({ min: 4, max: 25 }),
    check('direccion')
        .exists()
        .isString()
        .isLength({ min: 5, max: 100 }),
    check('usuario')
        .exists()
        .isLength({ min: 1 }).isNumeric(),

    (req, res, next) => {
        validaciones(req, res, next)
    }
]


export const actualizarRolesServicios = [
    check('id')
        .isLength({ min: 1 })
        .exists().isNumeric(),
    check('idServicios')
        .exists()
        .isLength({ min: 1 }).isNumeric(),
    check('idRol')
        .exists()
        .isLength({ min: 1 }).isNumeric(),
    check('correo')
        .exists()
        .matches(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/),
    check('modificado')
        .exists()
        .matches(/^\d{4}-\d{2}-\d{2} \d{1,2}:\d{2}:\d{2}$/),
    check('usuario')
        .exists()
        .isLength({ min: 1 }).isNumeric(),

    (req, res, next) => {
        validaciones(req, res, next)
    }
]

export const validar = [
    check('id')
        .isLength({ min: 1 })
        .exists().isNumeric(),
    check('idServicios')
        .isLength({ min: 1 })
        .exists().isNumeric(),
    check('idRol')
        .isLength({ min: 1 })
        .exists().isNumeric(),
    check('modificado')
        .exists()
        .matches(/^\d{4}-\d{2}-\d{2} \d{1,2}:\d{2}:\d{2}$/),
    check('usuario')
        .exists()
        .isLength({ min: 1 }).isNumeric(),

    (req, res, next) => {
        validaciones(req, res, next)
    }
]

export const deshabilitar = [
    check('id')
        .isLength({ min: 1 })
        .exists().isNumeric(),
    check('modificado')
        .exists()
        .matches(/^\d{4}-\d{2}-\d{2} \d{1,2}:\d{2}:\d{2}$/),
    check('usuario')
        .exists()
        .isLength({ min: 1 }).isNumeric(),

    (req, res, next) => {
        validaciones(req, res, next)
    }
]

export const cambiarMiContraseña = [

    check('pass1')
        .exists().
        isLength({ min: 5 }),
    check('pass2')
        .exists().
        isLength({ min: 5 }),
    check('usuario')
        .exists()
        .isLength({ min: 1 }).isNumeric(),

    (req, res, next) => {
        validaciones(req, res, next)
    }
]


export const eliminar = [
    check('id').isLength({ min: 1 }).exists().isNumeric(),

    (req, res, next) => {
        validaciones(req, res, next)
    }
]

export const buscar = [
    check('dato').isLength({ min: 1 }).exists(),
    (req, res, next) => {
        validaciones(req, res, next)
    }
]

export const siguiente = [
    check('id').isLength({ min: 1 }).exists().isNumeric(),

    (req, res, next) => {
        validaciones(req, res, next)
    }
]

export const anterior = [
    check('id').isLength({ min: 1 }).exists().isNumeric(),

    (req, res, next) => {
        validaciones(req, res, next)
    }
]

// buscar