# cmake_minimum_required(VERSION 3.10)
# project(bike-knight LANGUAGES CXX)

# set(CMAKE_CXX_STANDARD 17)
# set(CMAKE_CXX_STANDARD_REQUIRED ON)

# # 1. Cari SFML secara langsung (bukan lewat pkg-config)
# find_package(SFML 3.1 REQUIRED COMPONENTS graphics window system)

# add_executable(bike-knight src/main.cpp)

# # 2. Link target SFML modern secara langsung
# #    Ini otomatis mengatur include directory dan flag linker sekaligus
# target_link_libraries(bike-knight PRIVATE sfml-graphics sfml-window sfml-system)

cmake_minimum_required(VERSION 3.10)
project(bike-knight LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)


# Ubah jalur/path di bawah ini sesuai lokasi folder 
# Ganti dengan path absolut ke folder 'include' SFML 
set(SFML_INCLUDE_DIR "/home/arim/apps/sfml/SFML-3.1.0/include/SFML/")

# Ganti dengan path absolut ke folder tempat file .a atau .so berada
set(SFML_LIB_DIR "/home/arim/apps/sfml/SFML-3.1.0/lib/")


add_executable(bike-knight src/main.cpp)

# letak file header (.hpp) SFML
target_include_directories(bike-knight PRIVATE ${SFML_INCLUDE_DIR})

# Cari file .a atau .so secara spesifik dari folder lib 
find_library(SFML_GRAPHICS_LIB NAMES sfml-graphics HINTS ${SFML_LIB_DIR} REQUIRED)
find_library(SFML_WINDOW_LIB   NAMES sfml-window   HINTS ${SFML_LIB_DIR} REQUIRED)
find_library(SFML_SYSTEM_LIB   NAMES sfml-system   HINTS ${SFML_LIB_DIR} REQUIRED)

# Tautkan pustaka biner tersebut ke aplikasi 
target_link_libraries(bike-knight PRIVATE 
    ${SFML_GRAPHICS_LIB} 
    ${SFML_WINDOW_LIB} 
    ${SFML_SYSTEM_LIB}
)
