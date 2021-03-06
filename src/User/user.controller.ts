
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get('admin/ambassadors')
    async ambassadors() {
        return this.userService.find({
            is_ambassadors: true
        })
    }
 }
