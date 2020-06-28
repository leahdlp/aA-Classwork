class WordChainer
    attr_reader :all_seen_words

    def initialize(dictionary_file_name)
        @dictionary = [] 
        File.foreach(dictionary_file_name) { |line| @dictionary << line.chomp }
        @dictionary = @dictionary.to_set
        @current_words = []
        @all_seen_words = []
    end

    def adjacent_words(word)
        @dictionary.select do |w|
            if w.length == word.length
                if (0...word.length).count { |i| word[i] == w[i] } == word.length - 1
                    true
                else
                    false
                end
            else
                false
            end
        end
    end

    def run(source, target)
        @current_words << source
        @all_seen_words << source

        until @current_words.empty?
            new_current_words = explore_current_words
            p new_current_words
            @current_words = new_current_words
        end
    end

    def explore_current_words
        new_current_words = []
        @current_words.each do |curr_word|
            new_current_words += adjacent_words(curr_word).reject { |w| @all_seen_words.include?(w) }
            @all_seen_words += new_current_words
        end
    end
        

end