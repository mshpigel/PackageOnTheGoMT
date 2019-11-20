import { Sender } from "src/app/Classes/Sender";
import { UserPathComponent } from '../user-path/user-path.component';
import { UserPath } from './UserPath';

export class Operator extends Sender {
        public uSize: number;
        public uValue: number;
        public usId : string;
        public uPassport: string;//image
        public uPaths:Array<UserPath>;
}