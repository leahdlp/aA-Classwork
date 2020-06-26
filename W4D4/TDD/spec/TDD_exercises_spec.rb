require 'TDD_exercises'

# Remove dups
# Array has a uniq method that removes duplicates from an array. It returns the unique elements in the order in which they first appeared:

# [1, 2, 1, 3, 3].uniq # => [1, 2, 3]
# Write your own version of this method called my_uniq; it should take in an Array and return a new array.



describe Array do
    let(:arr1) { [1, 2, 1, 3, 3] }
    let(:arr2) { [-1, 0, 2, -2, 1] }
    let(:arr3) { [[0, 1, 2], [3, 4, 5], [6, 7, 8]] }
    let(:arr4) { [2000, 1000, 3000, 500,5000] }

    describe "#my_uniq" do
        it 'correctly removes all duplicate elements from an array' do 
            # arr = [1, 2, 1, 3, 3]
            expect(arr1.my_uniq).to eq([1, 2, 3])
        end
    end

    # subject(:arr) {  }
    describe "#two_sum" do 
        # arr = [-1, 0, 2, -2, 1]
        it "correctly returns indexes of all pairs that sum to zero" do
            expect(arr2.two_sum).to eq([[0, 4], [2, 3]])
        end
    end

    describe "#my_transpose" do
        it "correctly transposes a 2-D Array" do
            expect(arr3.my_transpose).to eq([[0, 3, 6], [1, 4, 7], [2, 5, 8]])
        end
    end

    describe "#stock_picker" do 
        it "correctly picks stocks" do 
            expect(arr4.stock_picker).to eq([3, 4])
        end
    end


end
