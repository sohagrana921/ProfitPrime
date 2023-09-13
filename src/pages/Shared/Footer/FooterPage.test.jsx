import {render,screen} from '@testing-library/react'
import FooterPage from './FooterPage';
import { describe, expect, it } from 'vitest';
describe("FooterPage",()=>{
    it("should be this text",()=>{
        render(<FooterPage></FooterPage>);
        expect(screen.getByText('Get connected with us on social networks:')).toBeInTheDocument();
    })
    
})