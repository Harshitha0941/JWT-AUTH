/* eslint-disable prettier/prettier */
// /* eslint-disable prefer-const */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable prettier/prettier */
// import { Test, TestingModule } from '@nestjs/testing';
// import { plainToInstance } from 'class-transformer';
// import { request } from 'http';
// import { Posts } from 'src/entitty/post.entity';
// import { PostsDto } from './dto/posts.dto';
// import { PostsController } from './posts.controller';
// import { PostsService } from './posts.service';

// const posts =[{
//   id:1,
//   title :"Post1",
//   description :"This is a Post1",
//   created_date : "20-04-2021",
//   updated_date : "20-04-2021",
//   is_featured : "20-04-2021"
// }]

// const ofImportDto = plainToInstance(PostsDto, Posts)

// // const errors = await validate(ofImportDto, { skipMissingProperties: true })

// describe('Given hotels', () => {

// let postsController: PostsController;

// let postsService: PostsService;

// beforeEach(async () =>{
//   let module = await Test.createTestingModule({
//         controllers :[PostsController],
//         providers:[ PostsService, {
//         provide: PostsService,
//         useFactory: () =>({
//             addPosts: jest.fn(),
//             getAllPosts: jest.fn(),
//             getPostsById:jest.fn(),
//             deletePostsById: jest.fn(),
//             updatePosts: jest.fn()
//     })
//   }]
// }).compile()

//     postsController = module.get<PostsController>(PostsController)
//     postsService = module.get<PostsService>(PostsService)

// })
  

// it('should be defined', () => {
//   expect(PostsController).toBeDefined();
// }) 


// //addHotels
//   describe('When add Hotels', ()=> {
//     it('should return response', async ()=>{
//       const message = 'Success';
      
//       const hotelsDetails = {
//         id:1,
//         title :"Post1",
//         description :"This is a Post1",
//         created_date : "20-04-2021",
//         updated_date : "20-04-2021",
//         is_featured : "20-04-2021"
//     }
//         const ofImportDtos = plainToInstance(PostsDto, hotelsDetails)
//         let addPostsSpy = jest.spyOn(postsService, 'addPosts').mockResolvedValue(message)
//         let response = await postsController.addPosts(ofImportDto,request);
//         expect(response).toEqual(message)
//         expect(addPostsSpy).toHaveBeenCalled();
//         expect(addPostsSpy).toHaveBeenCalledTimes(1)
//       } )
//     })//listOfHotelsdescribe('When getAll Hotels', ()=> {it('should return response', async ()=>{let getAllHotelsSpy = jest.spyOn(hotelsService, 'listOfHotels').mockResolvedValue(ofImportDto)let response = await hotelsController.listOfHotels();expect(response).toEqual(ofImportDto)expect(getAllHotelsSpy).toHaveBeenCalled();expect(getAllHotelsSpy).toHaveBeenCalledTimes(1)} )})


// //deleteHotels
//     describe('When DeleteHotels()', ()=> {
//           it('should return response', async ()=>{
//           let hotelDetails = 'success';
//           let getOneHotelsSpy = jest.spyOn(hotelsService, 'deleteHotels').mockResolvedValue(hotelDetails)
//           let response = await hotelsController.deleteHotels(1);
//           expect(response).toEqual(hotelDetails);
//           expect(getOneHotelsSpy).toHaveBeenCalled()
//         expect(getOneHotelsSpy).toHaveBeenCalledTimes(1)
// } )
// }) //getHotelByPlace
// describe('When Get Hotel By Place()', ()=> {
// it('should return response', async ()=>{
// let getHotelByPlaceSpy = jest.spyOn(hotelsService, 'getHotelByPlace').mockResolvedValue(ofImportDto)
// let response = await hotelsController.getHotelByPlace('trichy');
// expect(response).toEqual(ofImportDto)
// expect(getHotelByPlaceSpy).toHaveBeenCalled()
// expect(getHotelByPlaceSpy).toHaveBeenCalledTimes(1)
// } )
// })
// })

