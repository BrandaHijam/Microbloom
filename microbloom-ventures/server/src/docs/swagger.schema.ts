/**
 * @openapi
 * components:
 *   schemas:
 *
 *     # ======================
 *     # COURSES
 *     # ======================
 *
 *     Course:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         slug:
 *           type: string
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         curriculum:
 *           type: array
 *           items:
 *             type: string
 *         duration:
 *           type: integer
 *           format: int32
 *         fees:
 *           type: integer
 *           format: int32
 *         eligibility:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     CourseCreateInput:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - slug
 *         - duration
 *         - fees
 *       properties:
 *         title:
 *           type: string
 *           example: Microgreens Mastery
 *         description:
 *           type: string
 *           example: Learn microgreens production and business
 *         slug:
 *           type: string
 *           example: microgreens-mastery
 *         curriculum:
 *           type: array
 *           items:
 *             type: string
 *             example: Introduction
 *         duration:
 *           type: integer
 *           format: int32
 *           example: 30
 *         fees:
 *           type: integer
 *           format: int32
 *           example: 4999
 *         eligibility:
 *           type: string
 *           example: Beginners
 *
 *     ApiResponseCourses:
 *       type: object
 *       properties:
 *         ok:
 *           type: boolean
 *         data:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Course'
 *
 *     ApiResponseCourse:
 *       type: object
 *       properties:
 *         ok:
 *           type: boolean
 *         data:
 *           $ref: '#/components/schemas/Course'
 *
 *     # ======================
 *     # INTERNSHIPS
 *     # ======================
 *
 *     Internship:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         location:
 *           type: string
 *         duration:
 *           type: integer
 *           format: int32
 *         stipend:
 *           type: number
 *         createdAt:
 *           type: string
 *           format: date-time
 *
 *     InternshipCreateInput:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - location
 *         - duration
 *       properties:
 *         title:
 *           type: string
 *           example: Backend Developer Intern
 *         description:
 *           type: string
 *           example: Work on APIs and databases
 *         location:
 *           type: string
 *           example: Remote
 *         duration:
 *           type: integer
 *           format: int32
 *           example: 3
 *         stipend:
 *           type: number
 *           example: 12000
 *
 *     InternshipApplicationCreateInput:
 *       type: object
 *       required:
 *         - internshipId
 *         - resumeUrl
 *       properties:
 *         internshipId:
 *           type: string
 *           example: cmj12xw0a00007kheutpmc1qu
 *         resumeUrl:
 *           type: string
 *           example: https://example.com/resume.pdf
 *         message:
 *           type: string
 *           example: I am very interested in this internship
 *
 *     Application:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         userId:
 *           type: string
 *         internshipId:
 *           type: string
 *         resumeUrl:
 *           type: string
 *         message:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *
 *     ApplicationWithUser:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         resumeUrl:
 *           type: string
 *         message:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         user:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *             name:
 *               type: string
 *             email:
 *               type: string
 */
